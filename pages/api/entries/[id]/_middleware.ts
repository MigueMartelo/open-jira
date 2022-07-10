import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const id = req.page.params?.id || '';

  const checkMongoIDRegExp = new RegExp(/^[0-9a-fA-F]{24}$/);

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(
      JSON.stringify({
        message: 'El id no es válido: ' + id,
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return NextResponse.next();
};
