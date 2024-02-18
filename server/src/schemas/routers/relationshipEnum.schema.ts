import { z } from "zod";

import { RelationshipEnumScalarFieldEnumSchema } from "@schemas/enums/RelationshipEnumScalarFieldEnum.schema";
import { RelationshipEnumCreateManyInputObjectSchema } from "@schemas/objects/RelationshipEnumCreateManyInput.schema";
import { RelationshipEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/RelationshipEnumUncheckedCreateInput.schema";
import { RelationshipEnumWhereInputObjectSchema } from "@schemas/objects/RelationshipEnumWhereInput.schema";
import { RelationshipEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/RelationshipEnumOrderByWithRelationInput.schema";
import { RelationshipEnumWhereUniqueInputObjectSchema } from "@schemas/objects/RelationshipEnumWhereUniqueInput.schema";
import { RelationshipEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/RelationshipEnumUncheckedUpdateInput.schema";
// import { RelationshipEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/RelationshipEnumOrderByWithAggregationInput.schema"; //
// import { RelationshipEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/RelationshipEnumScalarWhereWithAggregatesInput.schema"; //
import { RelationshipEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/RelationshipEnumUpdateManyMutationInput.schema"; //
// import { RelationshipEnumCountAggregateInputObjectSchema } from "@schemas/objects/RelationshipEnumCountAggregateInput.schema"; //
// import { RelationshipEnumMinAggregateInputObjectSchema } from "@schemas/objects/RelationshipEnumMinAggregateInput.schema"; //
// import { RelationshipEnumMaxAggregateInputObjectSchema } from "@schemas/objects/RelationshipEnumMaxAggregateInput.schema"; //

// export const RelationshipEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       RelationshipEnumOrderByWithRelationInputObjectSchema,
//       RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: RelationshipEnumWhereInputObjectSchema.optional(),
//   cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), RelationshipEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: RelationshipEnumMinAggregateInputObjectSchema.optional(),
//   _max: RelationshipEnumMaxAggregateInputObjectSchema.optional(),
// });

export const RelationshipEnumCreateManySchema = z.object({
  data: z.union([
    RelationshipEnumCreateManyInputObjectSchema,
    z.array(RelationshipEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const RelationshipEnumCreateOneSchema = z.object({
  data: RelationshipEnumUncheckedCreateInputObjectSchema,
});

export const RelationshipEnumDeleteManySchema = z.object({
  where: RelationshipEnumWhereInputObjectSchema.optional(),
});

export const RelationshipEnumDeleteOneSchema = z.object({
  where: RelationshipEnumWhereUniqueInputObjectSchema,
});

export const RelationshipEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      RelationshipEnumOrderByWithRelationInputObjectSchema,
      RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RelationshipEnumWhereInputObjectSchema.optional(),
  cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RelationshipEnumScalarFieldEnumSchema).optional(),
});

export const RelationshipEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        RelationshipEnumOrderByWithRelationInputObjectSchema,
        RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: RelationshipEnumWhereInputObjectSchema.optional(),
    cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(RelationshipEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const RelationshipEnumFindUniqueSchema = z.object({
  where: RelationshipEnumWhereUniqueInputObjectSchema,
});

// export const RelationshipEnumGroupBySchema = z.object({
//   where: RelationshipEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       RelationshipEnumOrderByWithAggregationInputObjectSchema,
//       RelationshipEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: RelationshipEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(RelationshipEnumScalarFieldEnumSchema),
// });

export const RelationshipEnumUpdateManySchema = z.object({
  data: RelationshipEnumUpdateManyMutationInputObjectSchema,
  where: RelationshipEnumWhereInputObjectSchema.optional(),
});

export const RelationshipEnumUpdateOneSchema = z.object({
  data: RelationshipEnumUncheckedUpdateInputObjectSchema,
  where: RelationshipEnumWhereUniqueInputObjectSchema,
});

// export const RelationshipEnumUpsertSchema = z.object({
//   where: RelationshipEnumWhereUniqueInputObjectSchema,
//   create: RelationshipEnumUncheckedCreateInputObjectSchema,
//   update: RelationshipEnumUncheckedCreateInputObjectSchema,
// });

export const RelationshipEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     RelationshipEnumOrderByWithRelationInputObjectSchema,
    //     RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: RelationshipEnumWhereInputObjectSchema.optional(),
    // cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
