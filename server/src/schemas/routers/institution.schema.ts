import { z } from "zod";

import { InstitutionScalarFieldEnumSchema } from "@schemas/enums/InstitutionScalarFieldEnum.schema";
import { InstitutionCreateManyInputObjectSchema } from "@schemas/objects/InstitutionCreateManyInput.schema";
import { InstitutionUncheckedCreateInputObjectSchema } from "@schemas/objects/InstitutionUncheckedCreateInput.schema";
import { InstitutionWhereInputObjectSchema } from "@schemas/objects/InstitutionWhereInput.schema";
import { InstitutionOrderByWithRelationInputObjectSchema } from "@schemas/objects/InstitutionOrderByWithRelationInput.schema";
import { InstitutionWhereUniqueInputObjectSchema } from "@schemas/objects/InstitutionWhereUniqueInput.schema";
import { InstitutionUncheckedUpdateInputObjectSchema } from "@schemas/objects/InstitutionUncheckedUpdateInput.schema";
// import { InstitutionOrderByWithAggregationInputObjectSchema } from "@schemas/objects/InstitutionOrderByWithAggregationInput.schema"; //
// import { InstitutionScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/InstitutionScalarWhereWithAggregatesInput.schema"; //
// import { InstitutionUpdateManyMutationInputObjectSchema } from "@schemas/objects/InstitutionUpdateManyMutationInput.schema"; //
// import { InstitutionCountAggregateInputObjectSchema } from "@schemas/objects/InstitutionCountAggregateInput.schema"; //
// import { InstitutionMinAggregateInputObjectSchema } from "@schemas/objects/InstitutionMinAggregateInput.schema"; //
// import { InstitutionMaxAggregateInputObjectSchema } from "@schemas/objects/InstitutionMaxAggregateInput.schema"; //

// export const InstitutionAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionOrderByWithRelationInputObjectSchema,
//       InstitutionOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionWhereInputObjectSchema.optional(),
//   cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), InstitutionCountAggregateInputObjectSchema])
//     .optional(),
//   _min: InstitutionMinAggregateInputObjectSchema.optional(),
//   _max: InstitutionMaxAggregateInputObjectSchema.optional(),
// });

export const InstitutionCreateManySchema = z.object({
  data: z.union([
    InstitutionCreateManyInputObjectSchema,
    z.array(InstitutionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const InstitutionCreateOneSchema = z.object({
  data: InstitutionUncheckedCreateInputObjectSchema,
});

export const InstitutionDeleteManySchema = z.object({
  where: InstitutionWhereInputObjectSchema.optional(),
});

export const InstitutionDeleteOneSchema = z.object({
  where: InstitutionWhereUniqueInputObjectSchema.optional(),
});

// export const InstitutionFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionOrderByWithRelationInputObjectSchema,
//       InstitutionOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionWhereInputObjectSchema.optional(),
//   cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
// });

export const InstitutionFindManySchema = z.object({
  orderBy: z
    .union([
      InstitutionOrderByWithRelationInputObjectSchema,
      InstitutionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InstitutionWhereInputObjectSchema.optional(),
  cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
});

export const InstitutionFindUniqueSchema = z.object({
  where: InstitutionWhereUniqueInputObjectSchema,
});

// export const InstitutionGroupBySchema = z.object({
//   where: InstitutionWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       InstitutionOrderByWithAggregationInputObjectSchema,
//       InstitutionOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: InstitutionScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(InstitutionScalarFieldEnumSchema),
// });

// export const InstitutionUpdateManySchema = z.object({
//   data: InstitutionUpdateManyMutationInputObjectSchema,
//   where: InstitutionWhereInputObjectSchema.optional(),
// });

export const InstitutionUpdateOneSchema = z.object({
  data: InstitutionUncheckedUpdateInputObjectSchema,
  where: InstitutionWhereUniqueInputObjectSchema,
});

// export const InstitutionUpsertSchema = z.object({
//   where: InstitutionWhereUniqueInputObjectSchema,
//   create: InstitutionUncheckedCreateInputObjectSchema,
//   update: InstitutionUncheckedCreateInputObjectSchema,
// });

export const InstitutionCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     InstitutionOrderByWithRelationInputObjectSchema,
  //     InstitutionOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: InstitutionWhereInputObjectSchema.optional(),
  // cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
