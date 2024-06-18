import { createParamDecorator, ExecutionContext, NotFoundException } from '@nestjs/common';
import { Client, store } from 'src/store/store.provider';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Express.Request>();

    const clientId = '42';
    // Replace this static value by a dynamic one comming from the heades USER_ID
    // You can use the request.headers dictinary for that matter

    const client: Client = store.clients.find((c) => c.id === clientId);

    // If no user is found the variable will be considered as undefined
    if (client === undefined) {
      // Here we want to throw a not found exception when the user is not found
      // You can inspire your self from this documentation https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      // You can get more infos related to http codes on a global maner from this MDN page https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
    }

    return client;
  },
);
