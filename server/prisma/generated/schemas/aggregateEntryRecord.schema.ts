import { z } from 'zod';
import { EntryRecordOrderByWithRelationInputObjectSchema } from './objects/EntryRecordOrderByWithRelationInput.schema';
import { EntryRecordWhereInputObjectSchema } from './objects/EntryRecordWhereInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './objects/EntryRecordWhereUniqueInput.schema';
import { EntryRecordCountAggregateInputObjectSchema } from './objects/EntryRecordCountAggregateInput.schema';
import { EntryRecordMinAggregateInputObjectSchema } from './objects/EntryRecordMinAggregateInput.schema';
import { EntryRecordMaxAggregateInputObjectSchema } from './objects/EntryRecordMaxAggregateInput.schema';

export const EntryRecordAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), EntryRecordCountAggregateInputObjectSchema])
    .optional(),
  _min: EntryRecordMinAggregateInputObjectSchema.optional(),
  _max: EntryRecordMaxAggregateInputObjectSchema.optional(),
});
