import { z } from "zod";

import { RelationshipScalarFieldEnumSchema } from "@schemas/enums/RelationshipScalarFieldEnum.schema";
import { RelationshipCreateManyInputObjectSchema } from "@schemas/objects/RelationshipCreateManyInput.schema";
import { RelationshipUncheckedCreateInputObjectSchema } from "@schemas/objects/RelationshipUncheckedCreateInput.schema";
import { RelationshipWhereInputObjectSchema } from "@schemas/objects/RelationshipWhereInput.schema";
import { RelationshipOrderByWithRelationInputObjectSchema } from "@schemas/objects/RelationshipOrderByWithRelationInput.schema";
import { RelationshipWhereUniqueInputObjectSchema } from "@schemas/objects/RelationshipWhereUniqueInput.schema";
import { RelationshipUncheckedUpdateInputObjectSchema } from "@schemas/objects/RelationshipUncheckedUpdateInput.schema";
// import { RelationshipOrderByWithAggregationInputObjectSchema } from "@schemas/objects/RelationshipOrderByWithAggregationInput.schema"; //
// import { RelationshipScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/RelationshipScalarWhereWithAggregatesInput.schema"; //
import { RelationshipUpdateManyMutationInputObjectSchema } from "@schemas/objects/RelationshipUpdateManyMutationInput.schema"; //
// import { RelationshipCountAggregateInputObjectSchema } from "@schemas/objects/RelationshipCountAggregateInput.schema"; //
// import { RelationshipMinAggregateInputObjectSchema } from "@schemas/objects/RelationshipMinAggregateInput.schema"; //
// import { RelationshipMaxAggregateInputObjectSchema } from "@schemas/objects/RelationshipMaxAggregateInput.schema"; //

// export const RelationshipAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       RelationshipOrderByWithRelationInputObjectSchema,
//       RelationshipOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: RelationshipWhereInputObjectSchema.optional(),
//   cursor: RelationshipWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), RelationshipCountAggregateInputObjectSchema])
//     .optional(),
//   _min: RelationshipMinAggregateInputObjectSchema.optional(),
//   _max: RelationshipMaxAggregateInputObjectSchema.optional(),
// });

export const RelationshipCreateManySchema = z.object({
  data: z.union([
    RelationshipCreateManyInputObjectSchema,
    z.array(RelationshipCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const RelationshipCreateOneSchema = z.object({
  data: RelationshipUncheckedCreateInputObjectSchema,
});

export const RelationshipDeleteManySchema = z.object({
  where: RelationshipWhereInputObjectSchema.optional(),
});

export const RelationshipDeleteOneSchema = z.object({
  where: RelationshipWhereUniqueInputObjectSchema,
});

export const RelationshipFindFirstSchema = z.object({
  orderBy: z
    .union([
      RelationshipOrderByWithRelationInputObjectSchema,
      RelationshipOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RelationshipWhereInputObjectSchema.optional(),
  cursor: RelationshipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RelationshipScalarFieldEnumSchema).optional(),
});

export const RelationshipFindManySchema = z
  .object({
    orderBy: z
      .union([
        RelationshipOrderByWithRelationInputObjectSchema,
        RelationshipOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: RelationshipWhereInputObjectSchema.optional(),
    cursor: RelationshipWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(RelationshipScalarFieldEnumSchema).optional(),
  })
  .optional();

export const RelationshipFindUniqueSchema = z.object({
  where: RelationshipWhereUniqueInputObjectSchema,
});

// export const RelationshipGroupBySchema = z.object({
//   where: RelationshipWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       RelationshipOrderByWithAggregationInputObjectSchema,
//       RelationshipOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: RelationshipScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(RelationshipScalarFieldEnumSchema),
// });

export const RelationshipUpdateManySchema = z.object({
  data: RelationshipUpdateManyMutationInputObjectSchema,
  where: RelationshipWhereInputObjectSchema.optional(),
});

export const RelationshipUpdateOneSchema = z.object({
  data: RelationshipUncheckedUpdateInputObjectSchema,
  where: RelationshipWhereUniqueInputObjectSchema,
});

// export const RelationshipUpsertSchema = z.object({
//   where: RelationshipWhereUniqueInputObjectSchema,
//   create: RelationshipUncheckedCreateInputObjectSchema,
//   update: RelationshipUncheckedCreateInputObjectSchema,
// });

export const RelationshipCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     RelationshipOrderByWithRelationInputObjectSchema,
    //     RelationshipOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: RelationshipWhereInputObjectSchema.optional(),
    // cursor: RelationshipWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
