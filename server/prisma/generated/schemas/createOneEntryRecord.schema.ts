import { z } from 'zod';
import { EntryRecordCreateInputObjectSchema } from './objects/EntryRecordCreateInput.schema';
import { EntryRecordUncheckedCreateInputObjectSchema } from './objects/EntryRecordUncheckedCreateInput.schema';

export const EntryRecordCreateOneSchema = z.object({
  data: z.union([
    EntryRecordCreateInputObjectSchema,
    EntryRecordUncheckedCreateInputObjectSchema,
  ]),
});
