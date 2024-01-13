import { z } from 'zod';
import { EntryRecordCreateManyInputObjectSchema } from './objects/EntryRecordCreateManyInput.schema';

export const EntryRecordCreateManySchema = z.object({
  data: z.union([
    EntryRecordCreateManyInputObjectSchema,
    z.array(EntryRecordCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
