import { z } from "zod";

import { MedicalServiceCategoryScalarFieldEnumSchema } from "@schemas/enums/MedicalServiceCategoryScalarFieldEnum.schema";
import { MedicalServiceCategoryCreateManyInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryCreateManyInput.schema";
import { MedicalServiceCategoryUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryUncheckedCreateInput.schema";
import { MedicalServiceCategoryWhereInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryWhereInput.schema";
import { MedicalServiceCategoryOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryOrderByWithRelationInput.schema";
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryWhereUniqueInput.schema";
import { MedicalServiceCategoryUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryUncheckedUpdateInput.schema";
// import { MedicalServiceCategoryOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryOrderByWithAggregationInput.schema"; //
// import { MedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryScalarWhereWithAggregatesInput.schema"; //
import { MedicalServiceCategoryUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryUpdateManyMutationInput.schema"; //
// import { MedicalServiceCategoryCountAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryCountAggregateInput.schema"; //
// import { MedicalServiceCategoryMinAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryMinAggregateInput.schema"; //
// import { MedicalServiceCategoryMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceCategoryMaxAggregateInput.schema"; //

// export const MedicalServiceCategoryAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
//       MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
//   cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalServiceCategoryCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
//   _max: MedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalServiceCategoryCreateManySchema = z.object({
  data: z.union([
    MedicalServiceCategoryCreateManyInputObjectSchema,
    z.array(MedicalServiceCategoryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalServiceCategoryCreateOneSchema = z.object({
  data: MedicalServiceCategoryUncheckedCreateInputObjectSchema,
});

export const MedicalServiceCategoryDeleteManySchema = z.object({
  where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
});

export const MedicalServiceCategoryDeleteOneSchema = z.object({
  where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
});

export const MedicalServiceCategoryFindFirstSchema = z.object({
  orderBy: z
    .union([
      MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
      MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
  cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MedicalServiceCategoryScalarFieldEnumSchema).optional(),
});

export const MedicalServiceCategoryFindManySchema = z
  .object({
    orderBy: z
      .union([
        MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
        MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
    cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(MedicalServiceCategoryScalarFieldEnumSchema).optional(),
  })
  .optional();

export const MedicalServiceCategoryFindUniqueSchema = z.object({
  where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
});

// export const MedicalServiceCategoryGroupBySchema = z.object({
//   where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalServiceCategoryOrderByWithAggregationInputObjectSchema,
//       MedicalServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalServiceCategoryScalarFieldEnumSchema),
// });

export const MedicalServiceCategoryUpdateManySchema = z.object({
  data: MedicalServiceCategoryUpdateManyMutationInputObjectSchema,
  where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
});

export const MedicalServiceCategoryUpdateOneSchema = z.object({
  data: MedicalServiceCategoryUncheckedUpdateInputObjectSchema,
  where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
});

// export const MedicalServiceCategoryUpsertSchema = z.object({
//   where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
//   create: MedicalServiceCategoryUncheckedCreateInputObjectSchema,
//   update: MedicalServiceCategoryUncheckedCreateInputObjectSchema,
// });

export const MedicalServiceCategoryCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
    //     MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
    // cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
