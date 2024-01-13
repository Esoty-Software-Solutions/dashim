import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './objects/EntryRecordWhereInput.schema';

export const EntryRecordDeleteManySchema = z.object({
  where: EntryRecordWhereInputObjectSchema.optional(),
});
