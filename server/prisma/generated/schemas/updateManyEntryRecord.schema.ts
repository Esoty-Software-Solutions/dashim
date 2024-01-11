import { z } from 'zod';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './objects/EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordWhereInputObjectSchema } from './objects/EntryRecordWhereInput.schema';

export const EntryRecordUpdateManySchema = z.object({
  data: EntryRecordUpdateManyMutationInputObjectSchema,
  where: EntryRecordWhereInputObjectSchema.optional(),
});
