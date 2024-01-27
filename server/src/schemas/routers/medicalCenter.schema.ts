import { z } from "zod";

import { MedicalCenterScalarFieldEnumSchema } from "@schemas/enums/MedicalCenterScalarFieldEnum.schema";
import { MedicalCenterCreateManyInputObjectSchema } from "@schemas/objects/MedicalCenterCreateManyInput.schema";
import { MedicalCenterUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalCenterUncheckedCreateInput.schema";
import { MedicalCenterWhereInputObjectSchema } from "@schemas/objects/MedicalCenterWhereInput.schema";
import { MedicalCenterOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalCenterOrderByWithRelationInput.schema";
import { MedicalCenterWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalCenterWhereUniqueInput.schema";
import { MedicalCenterUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalCenterUncheckedUpdateInput.schema";
// import { MedicalCenterOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalCenterOrderByWithAggregationInput.schema"; //
// import { MedicalCenterScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalCenterScalarWhereWithAggregatesInput.schema"; //
import { MedicalCenterUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalCenterUpdateManyMutationInput.schema"; //
// import { MedicalCenterCountAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterCountAggregateInput.schema"; //
// import { MedicalCenterMinAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterMinAggregateInput.schema"; //
// import { MedicalCenterMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterMaxAggregateInput.schema"; //

// export const MedicalCenterAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterOrderByWithRelationInputObjectSchema,
//       MedicalCenterOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalCenterCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalCenterMinAggregateInputObjectSchema.optional(),
//   _max: MedicalCenterMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalCenterCreateManySchema = z.object({
  data: z.union([
    MedicalCenterCreateManyInputObjectSchema,
    z.array(MedicalCenterCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalCenterCreateOneSchema = z.object({
  data: MedicalCenterUncheckedCreateInputObjectSchema,
});

export const MedicalCenterDeleteManySchema = z.object({
  where: MedicalCenterWhereInputObjectSchema.optional(),
});

export const MedicalCenterDeleteOneSchema = z.object({
  where: MedicalCenterWhereUniqueInputObjectSchema,
});

// export const MedicalCenterFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterOrderByWithRelationInputObjectSchema,
//       MedicalCenterOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
// });

export const MedicalCenterFindManySchema = z
  .object({
    orderBy: z
      .union([
        MedicalCenterOrderByWithRelationInputObjectSchema,
        MedicalCenterOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MedicalCenterWhereInputObjectSchema.optional(),
    cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
  })
  .optional();

export const MedicalCenterFindUniqueSchema = z.object({
  where: MedicalCenterWhereUniqueInputObjectSchema,
});

// export const MedicalCenterGroupBySchema = z.object({
//   where: MedicalCenterWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalCenterOrderByWithAggregationInputObjectSchema,
//       MedicalCenterOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalCenterScalarFieldEnumSchema),
// });

export const MedicalCenterUpdateManySchema = z.object({
  data: MedicalCenterUpdateManyMutationInputObjectSchema,
  where: MedicalCenterWhereInputObjectSchema.optional(),
});

export const MedicalCenterUpdateOneSchema = z.object({
  data: MedicalCenterUncheckedUpdateInputObjectSchema,
  where: MedicalCenterWhereUniqueInputObjectSchema,
});

// export const MedicalCenterUpsertSchema = z.object({
//   where: MedicalCenterWhereUniqueInputObjectSchema,
//   create: MedicalCenterUncheckedCreateInputObjectSchema,
//   update: MedicalCenterUncheckedCreateInputObjectSchema,
// });

export const MedicalCenterCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     MedicalCenterOrderByWithRelationInputObjectSchema,
    //     MedicalCenterOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: MedicalCenterWhereInputObjectSchema.optional(),
    // cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
