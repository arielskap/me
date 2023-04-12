import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { IMessage, ResponseData } from "../../../@types";
import Joi from "joi";
import { presetSystemMessage } from "../../lib/constants";
import Message from "../../models/message";
import dbConnect from "../../lib/dbConnect";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const schema = Joi.object({
  messages: Joi.array()
    .items(
      Joi.object({
        role: Joi.string().valid("user", "assistant").required(),
        content: Joi.string().required(),
      }).required()
    )
    .required(),
});

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  await dbConnect();

  if (req.method === "POST") {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Bad request",
      });
    }
    const messages: Array<IMessage> = req.body.messages;
    const oldMessages = messages.slice(0, -1);
    const lastMessage = messages.pop() as IMessage;
    const clientIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: presetSystemMessage,
        },
        ...oldMessages,
        {
          ...lastMessage,
          content: `Reclutador: ${lastMessage.content}. Responde como Ariel Santiago Villarreal Gutierrez:`,
        },
      ],
    });
    await Message.create({
      data: [
        ...messages,
        {
          role: "assistant",
          content: result.data.choices[0].message?.content,
        },
      ],
      ip: clientIp,
    });
    return res.status(200).json({
      success: true,
      message: result.data.choices[0].message?.content,
    });
  }
  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
};

export default handler;
