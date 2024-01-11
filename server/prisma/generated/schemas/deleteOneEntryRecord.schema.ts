import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';

export const EntryRecordDeleteOneSchema = z.object({
  where: EntryRecordWhereUniqueInputObjectSchema,
});
