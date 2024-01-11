import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateInputObjectSchema } from './objects/EntryRecordCreateInput.schema';
import { EntryRecordUncheckedCreateInputObjectSchema } from './objects/EntryRecordUncheckedCreateInput.schema';
import { EntryRecordUpdateInputObjectSchema } from './objects/EntryRecordUpdateInput.schema';
import { EntryRecordUncheckedUpdateInputObjectSchema } from './objects/EntryRecordUncheckedUpdateInput.schema';

export const EntryRecordUpsertSchema = z.object({
  where: EntryRecordWhereUniqueInputObjectSchema,
  create: z.union([
    EntryRecordCreateInputObjectSchema,
    EntryRecordUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EntryRecordUpdateInputObjectSchema,
    EntryRecordUncheckedUpdateInputObjectSchema,
  ]),
});
