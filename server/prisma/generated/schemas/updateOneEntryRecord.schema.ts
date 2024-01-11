import { z } from 'zod';
import { EntryRecordUpdateInputObjectSchema } from './objects/EntryRecordUpdateInput.schema';
import { EntryRecordUncheckedUpdateInputObjectSchema } from './objects/EntryRecordUncheckedUpdateInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';

export const EntryRecordUpdateOneSchema = z.object({
  data: z.union([
    EntryRecordUpdateInputObjectSchema,
    EntryRecordUncheckedUpdateInputObjectSchema,
  ]),
  where: EntryRecordWhereUniqueInputObjectSchema,
});
