import { z } from "zod";

import { ReviewStatusEnumScalarFieldEnumSchema } from "@schemas/enums/ReviewStatusEnumScalarFieldEnum.schema";
import { ReviewStatusEnumCreateManyInputObjectSchema } from "@schemas/objects/ReviewStatusEnumCreateManyInput.schema";
import { ReviewStatusEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/ReviewStatusEnumUncheckedCreateInput.schema";
import { ReviewStatusEnumWhereInputObjectSchema } from "@schemas/objects/ReviewStatusEnumWhereInput.schema";
import { ReviewStatusEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/ReviewStatusEnumOrderByWithRelationInput.schema";
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from "@schemas/objects/ReviewStatusEnumWhereUniqueInput.schema";
import { ReviewStatusEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/ReviewStatusEnumUncheckedUpdateInput.schema";
// import { ReviewStatusEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/ReviewStatusEnumOrderByWithAggregationInput.schema"; //
// import { ReviewStatusEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/ReviewStatusEnumScalarWhereWithAggregatesInput.schema"; //
import { ReviewStatusEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/ReviewStatusEnumUpdateManyMutationInput.schema"; //
// import { ReviewStatusEnumCountAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusEnumCountAggregateInput.schema"; //
// import { ReviewStatusEnumMinAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusEnumMinAggregateInput.schema"; //
// import { ReviewStatusEnumMaxAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusEnumMaxAggregateInput.schema"; //

// export const ReviewStatusEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       ReviewStatusEnumOrderByWithRelationInputObjectSchema,
//       ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: ReviewStatusEnumWhereInputObjectSchema.optional(),
//   cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), ReviewStatusEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: ReviewStatusEnumMinAggregateInputObjectSchema.optional(),
//   _max: ReviewStatusEnumMaxAggregateInputObjectSchema.optional(),
// });

export const ReviewStatusEnumCreateManySchema = z.object({
  data: z.union([
    ReviewStatusEnumCreateManyInputObjectSchema,
    z.array(ReviewStatusEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const ReviewStatusEnumCreateOneSchema = z.object({
  data: ReviewStatusEnumUncheckedCreateInputObjectSchema,
});

export const ReviewStatusEnumDeleteManySchema = z.object({
  where: ReviewStatusEnumWhereInputObjectSchema.optional(),
});

export const ReviewStatusEnumDeleteOneSchema = z.object({
  where: ReviewStatusEnumWhereUniqueInputObjectSchema,
});

export const ReviewStatusEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      ReviewStatusEnumOrderByWithRelationInputObjectSchema,
      ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewStatusEnumWhereInputObjectSchema.optional(),
  cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReviewStatusEnumScalarFieldEnumSchema).optional(),
});

export const ReviewStatusEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        ReviewStatusEnumOrderByWithRelationInputObjectSchema,
        ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ReviewStatusEnumWhereInputObjectSchema.optional(),
    cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ReviewStatusEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const ReviewStatusEnumFindUniqueSchema = z.object({
  where: ReviewStatusEnumWhereUniqueInputObjectSchema,
});

// export const ReviewStatusEnumGroupBySchema = z.object({
//   where: ReviewStatusEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       ReviewStatusEnumOrderByWithAggregationInputObjectSchema,
//       ReviewStatusEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: ReviewStatusEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(ReviewStatusEnumScalarFieldEnumSchema),
// });

export const ReviewStatusEnumUpdateManySchema = z.object({
  data: ReviewStatusEnumUpdateManyMutationInputObjectSchema,
  where: ReviewStatusEnumWhereInputObjectSchema.optional(),
});

export const ReviewStatusEnumUpdateOneSchema = z.object({
  data: ReviewStatusEnumUncheckedUpdateInputObjectSchema,
  where: ReviewStatusEnumWhereUniqueInputObjectSchema,
});

// export const ReviewStatusEnumUpsertSchema = z.object({
//   where: ReviewStatusEnumWhereUniqueInputObjectSchema,
//   create: ReviewStatusEnumUncheckedCreateInputObjectSchema,
//   update: ReviewStatusEnumUncheckedCreateInputObjectSchema,
// });

export const ReviewStatusEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     ReviewStatusEnumOrderByWithRelationInputObjectSchema,
    //     ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: ReviewStatusEnumWhereInputObjectSchema.optional(),
    // cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
