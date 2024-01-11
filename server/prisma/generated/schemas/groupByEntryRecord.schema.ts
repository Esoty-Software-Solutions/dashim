import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './objects/EntryRecordWhereInput.schema';
import { EntryRecordOrderByWithAggregationInputObjectSchema } from './objects/EntryRecordOrderByWithAggregationInput.schema';
import { EntryRecordScalarWhereWithAggregatesInputObjectSchema } from './objects/EntryRecordScalarWhereWithAggregatesInput.schema';
import { EntryRecordScalarFieldEnumSchema } from './enums/EntryRecordScalarFieldEnum.schema';

export const EntryRecordGroupBySchema = z.object({
  where: EntryRecordWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EntryRecordOrderByWithAggregationInputObjectSchema,
      EntryRecordOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EntryRecordScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EntryRecordScalarFieldEnumSchema),
});
