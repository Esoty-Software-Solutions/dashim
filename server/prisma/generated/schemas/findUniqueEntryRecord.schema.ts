import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';

export const EntryRecordFindUniqueSchema = z.object({
  where: EntryRecordWhereUniqueInputObjectSchema,
});
