import { z } from 'zod';
import { EntryRecordOrderByWithRelationInputObjectSchema } from './objects/EntryRecordOrderByWithRelationInput.schema';
import { EntryRecordWhereInputObjectSchema } from './objects/EntryRecordWhereInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';
import { EntryRecordScalarFieldEnumSchema } from './enums/EntryRecordScalarFieldEnum.schema';

export const EntryRecordFindManySchema = z.object({
  orderBy: z
    .union([
      EntryRecordOrderByWithRelationInputObjectSchema,
      EntryRecordOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EntryRecordWhereInputObjectSchema.optional(),
  cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EntryRecordScalarFieldEnumSchema).optional(),
});
