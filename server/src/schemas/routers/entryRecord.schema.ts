import { z } from "zod";

import { EntryRecordScalarFieldEnumSchema } from "@schemas/enums/EntryRecordScalarFieldEnum.schema";
import { EntryRecordCreateManyInputObjectSchema } from "@schemas/objects/EntryRecordCreateManyInput.schema";
import { EntryRecordUncheckedCreateInputObjectSchema } from "@schemas/objects/EntryRecordUncheckedCreateInput.schema";
import { EntryRecordWhereInputObjectSchema } from "@schemas/objects/EntryRecordWhereInput.schema";
import { EntryRecordOrderByWithRelationInputObjectSchema } from "@schemas/objects/EntryRecordOrderByWithRelationInput.schema";
import { EntryRecordWhereUniqueInputObjectSchema } from "@schemas/objects/EntryRecordWhereUniqueInput.schema";
import { EntryRecordUncheckedUpdateInputObjectSchema } from "@schemas/objects/EntryRecordUncheckedUpdateInput.schema";
// import { EntryRecordOrderByWithAggregationInputObjectSchema } from "@schemas/objects/EntryRecordOrderByWithAggregationInput.schema"; //
// import { EntryRecordScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/EntryRecordScalarWhereWithAggregatesInput.schema"; //
// import { EntryRecordUpdateManyMutationInputObjectSchema } from "@schemas/objects/EntryRecordUpdateManyMutationInput.schema"; //
// import { EntryRecordCountAggregateInputObjectSchema } from "@schemas/objects/EntryRecordCountAggregateInput.schema"; //
// import { EntryRecordMinAggregateInputObjectSchema } from "@schemas/objects/EntryRecordMinAggregateInput.schema"; //
// import { EntryRecordMaxAggregateInputObjectSchema } from "@schemas/objects/EntryRecordMaxAggregateInput.schema"; //

// export const EntryRecordAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       EntryRecordOrderByWithRelationInputObjectSchema,
//       EntryRecordOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: EntryRecordWhereInputObjectSchema.optional(),
//   cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), EntryRecordCountAggregateInputObjectSchema])
//     .optional(),
//   _min: EntryRecordMinAggregateInputObjectSchema.optional(),
//   _max: EntryRecordMaxAggregateInputObjectSchema.optional(),
// });

export const EntryRecordCreateManySchema = z.object({
  data: z.union([
    EntryRecordCreateManyInputObjectSchema,
    z.array(EntryRecordCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const EntryRecordCreateOneSchema = z.object({
  data: EntryRecordUncheckedCreateInputObjectSchema,
});

export const EntryRecordDeleteManySchema = z.object({
  where: EntryRecordWhereInputObjectSchema.optional(),
});

export const EntryRecordDeleteOneSchema = z.object({
  where: EntryRecordWhereUniqueInputObjectSchema.optional(),
});

// export const EntryRecordFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       EntryRecordOrderByWithRelationInputObjectSchema,
//       EntryRecordOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: EntryRecordWhereInputObjectSchema.optional(),
//   cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(EntryRecordScalarFieldEnumSchema).optional(),
// });

export const EntryRecordFindManySchema = z
  .object({
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
  })
  .optional();

export const EntryRecordFindUniqueSchema = z.object({
  where: EntryRecordWhereUniqueInputObjectSchema,
});

// export const EntryRecordGroupBySchema = z.object({
//   where: EntryRecordWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       EntryRecordOrderByWithAggregationInputObjectSchema,
//       EntryRecordOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: EntryRecordScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(EntryRecordScalarFieldEnumSchema),
// });

// export const EntryRecordUpdateManySchema = z.object({
//   data: EntryRecordUpdateManyMutationInputObjectSchema,
//   where: EntryRecordWhereInputObjectSchema.optional(),
// });

export const EntryRecordUpdateOneSchema = z.object({
  data: EntryRecordUncheckedUpdateInputObjectSchema,
  where: EntryRecordWhereUniqueInputObjectSchema,
});

// export const EntryRecordUpsertSchema = z.object({
//   where: EntryRecordWhereUniqueInputObjectSchema,
//   create: EntryRecordUncheckedCreateInputObjectSchema,
//   update: EntryRecordUncheckedCreateInputObjectSchema,
// });

export const EntryRecordCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     EntryRecordOrderByWithRelationInputObjectSchema,
    //     EntryRecordOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: EntryRecordWhereInputObjectSchema.optional(),
    // cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
