import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { IMessage, ResponseData } from '../../../@types';
import Joi from 'joi';
import { presetSystemMessage } from '../../lib/constants';
import Message from '../../models/message';
import dbConnect from '../../lib/dbConnect';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const schema = Joi.object({
  messages: Joi.array()
    .items(
      Joi.object({
        role: Joi.string().valid('user', 'assistant').required(),
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
  try {
    if (req.method === 'POST') {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: 'Bad request',
        });
      }
      const messages: Array<IMessage> = req.body.messages;
      const oldMessages = messages.slice(0, -1);
      const lastMessage = messages.pop() as IMessage;
      const newMessages = [
        ...oldMessages,
        {
          ...lastMessage,
          content: `Reclutador: ${lastMessage.content}. Responde como Ariel Santiago Villarreal Gutierrez:`,
        },
      ];
      const clientIp =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const result = await openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages: [
          {
            role: 'system',
            content: presetSystemMessage,
          },
          ...newMessages,
        ],
      });
      await Message.create({
        data: newMessages,
        ip: clientIp,
      });
      return res.status(200).json({
        success: true,
        message: result.choices[0].message?.content || '',
      });
    }
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export default handler;
