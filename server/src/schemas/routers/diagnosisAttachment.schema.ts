import { z } from "zod";

import { DiagnosisAttachmentScalarFieldEnumSchema } from "@schemas/enums/DiagnosisAttachmentScalarFieldEnum.schema";
import { DiagnosisAttachmentCreateManyInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentCreateManyInput.schema";
import { DiagnosisAttachmentUncheckedCreateInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentUncheckedCreateInput.schema";
import { DiagnosisAttachmentWhereInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentWhereInput.schema";
import { DiagnosisAttachmentOrderByWithRelationInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentOrderByWithRelationInput.schema";
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentWhereUniqueInput.schema";
import { DiagnosisAttachmentUncheckedUpdateInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentUncheckedUpdateInput.schema";
// import { DiagnosisAttachmentOrderByWithAggregationInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentOrderByWithAggregationInput.schema"; //
// import { DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentScalarWhereWithAggregatesInput.schema"; //
import { DiagnosisAttachmentUpdateManyMutationInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentUpdateManyMutationInput.schema"; //
// import { DiagnosisAttachmentCountAggregateInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentCountAggregateInput.schema"; //
// import { DiagnosisAttachmentMinAggregateInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentMinAggregateInput.schema"; //
// import { DiagnosisAttachmentMaxAggregateInputObjectSchema } from "@schemas/objects/DiagnosisAttachmentMaxAggregateInput.schema"; //

// export const DiagnosisAttachmentAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
//       DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
//   cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), DiagnosisAttachmentCountAggregateInputObjectSchema])
//     .optional(),
//   _min: DiagnosisAttachmentMinAggregateInputObjectSchema.optional(),
//   _max: DiagnosisAttachmentMaxAggregateInputObjectSchema.optional(),
// });

export const DiagnosisAttachmentCreateManySchema = z.object({
  data: z.union([
    DiagnosisAttachmentCreateManyInputObjectSchema,
    z.array(DiagnosisAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const DiagnosisAttachmentCreateOneSchema = z.object({
  data: DiagnosisAttachmentUncheckedCreateInputObjectSchema,
});

export const DiagnosisAttachmentDeleteManySchema = z.object({
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
});

export const DiagnosisAttachmentDeleteOneSchema = z.object({
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});

export const DiagnosisAttachmentFindFirstSchema = z.object({
  orderBy: z
    .union([
      DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
      DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
  cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
});

export const DiagnosisAttachmentFindManySchema = z
  .object({
    orderBy: z
      .union([
        DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
        DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
    cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
  })
  .optional();

export const DiagnosisAttachmentFindUniqueSchema = z.object({
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});

// export const DiagnosisAttachmentGroupBySchema = z.object({
//   where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       DiagnosisAttachmentOrderByWithAggregationInputObjectSchema,
//       DiagnosisAttachmentOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(DiagnosisAttachmentScalarFieldEnumSchema),
// });

export const DiagnosisAttachmentUpdateManySchema = z.object({
  data: DiagnosisAttachmentUpdateManyMutationInputObjectSchema,
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
});

export const DiagnosisAttachmentUpdateOneSchema = z.object({
  data: DiagnosisAttachmentUncheckedUpdateInputObjectSchema,
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});

// export const DiagnosisAttachmentUpsertSchema = z.object({
//   where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
//   create: DiagnosisAttachmentUncheckedCreateInputObjectSchema,
//   update: DiagnosisAttachmentUncheckedCreateInputObjectSchema,
// });

export const DiagnosisAttachmentCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
    //     DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
    // cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
