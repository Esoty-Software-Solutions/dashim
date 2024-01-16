import { z } from "zod";

import { ReviewStatusScalarFieldEnumSchema } from "@schemas/enums/ReviewStatusScalarFieldEnum.schema";
import { ReviewStatusCreateManyInputObjectSchema } from "@schemas/objects/ReviewStatusCreateManyInput.schema";
import { ReviewStatusUncheckedCreateInputObjectSchema } from "@schemas/objects/ReviewStatusUncheckedCreateInput.schema";
import { ReviewStatusWhereInputObjectSchema } from "@schemas/objects/ReviewStatusWhereInput.schema";
import { ReviewStatusOrderByWithRelationInputObjectSchema } from "@schemas/objects/ReviewStatusOrderByWithRelationInput.schema";
import { ReviewStatusWhereUniqueInputObjectSchema } from "@schemas/objects/ReviewStatusWhereUniqueInput.schema";
import { ReviewStatusUncheckedUpdateInputObjectSchema } from "@schemas/objects/ReviewStatusUncheckedUpdateInput.schema";
// import { ReviewStatusOrderByWithAggregationInputObjectSchema } from "@schemas/objects/ReviewStatusOrderByWithAggregationInput.schema"; //
// import { ReviewStatusScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/ReviewStatusScalarWhereWithAggregatesInput.schema"; //
// import { ReviewStatusUpdateManyMutationInputObjectSchema } from "@schemas/objects/ReviewStatusUpdateManyMutationInput.schema"; //
// import { ReviewStatusCountAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusCountAggregateInput.schema"; //
// import { ReviewStatusMinAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusMinAggregateInput.schema"; //
// import { ReviewStatusMaxAggregateInputObjectSchema } from "@schemas/objects/ReviewStatusMaxAggregateInput.schema"; //

// export const ReviewStatusAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       ReviewStatusOrderByWithRelationInputObjectSchema,
//       ReviewStatusOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: ReviewStatusWhereInputObjectSchema.optional(),
//   cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), ReviewStatusCountAggregateInputObjectSchema])
//     .optional(),
//   _min: ReviewStatusMinAggregateInputObjectSchema.optional(),
//   _max: ReviewStatusMaxAggregateInputObjectSchema.optional(),
// });

export const ReviewStatusCreateManySchema = z.object({
  data: z.union([
    ReviewStatusCreateManyInputObjectSchema,
    z.array(ReviewStatusCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const ReviewStatusCreateOneSchema = z.object({
  data: ReviewStatusUncheckedCreateInputObjectSchema,
});

export const ReviewStatusDeleteManySchema = z.object({
  where: ReviewStatusWhereInputObjectSchema.optional(),
});

export const ReviewStatusDeleteOneSchema = z.object({
  where: ReviewStatusWhereUniqueInputObjectSchema.optional(),
});

// export const ReviewStatusFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       ReviewStatusOrderByWithRelationInputObjectSchema,
//       ReviewStatusOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: ReviewStatusWhereInputObjectSchema.optional(),
//   cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
// });

export const ReviewStatusFindManySchema = z
  .object({
    orderBy: z
      .union([
        ReviewStatusOrderByWithRelationInputObjectSchema,
        ReviewStatusOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ReviewStatusWhereInputObjectSchema.optional(),
    cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
  })
  .optional();

export const ReviewStatusFindUniqueSchema = z.object({
  where: ReviewStatusWhereUniqueInputObjectSchema,
});

// export const ReviewStatusGroupBySchema = z.object({
//   where: ReviewStatusWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       ReviewStatusOrderByWithAggregationInputObjectSchema,
//       ReviewStatusOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: ReviewStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(ReviewStatusScalarFieldEnumSchema),
// });

// export const ReviewStatusUpdateManySchema = z.object({
//   data: ReviewStatusUpdateManyMutationInputObjectSchema,
//   where: ReviewStatusWhereInputObjectSchema.optional(),
// });

export const ReviewStatusUpdateOneSchema = z.object({
  data: ReviewStatusUncheckedUpdateInputObjectSchema,
  where: ReviewStatusWhereUniqueInputObjectSchema,
});

// export const ReviewStatusUpsertSchema = z.object({
//   where: ReviewStatusWhereUniqueInputObjectSchema,
//   create: ReviewStatusUncheckedCreateInputObjectSchema,
//   update: ReviewStatusUncheckedCreateInputObjectSchema,
// });

export const ReviewStatusCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     ReviewStatusOrderByWithRelationInputObjectSchema,
    //     ReviewStatusOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: ReviewStatusWhereInputObjectSchema.optional(),
    // cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
