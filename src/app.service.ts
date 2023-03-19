import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(): string {
    return 'Get Test';
  }

  postTest(): string {
    return 'Post Test';
  }

  deleteTest(): string {
    return 'Delete Test';
  }

  putTest(): string {
    return 'Put Test';
  }

  patchTest(): string {
    return 'Patch Test';
  }
}
