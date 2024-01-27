import { z } from "zod";

import { LabReportAttachmentScalarFieldEnumSchema } from "@schemas/enums/LabReportAttachmentScalarFieldEnum.schema";
import { LabReportAttachmentCreateManyInputObjectSchema } from "@schemas/objects/LabReportAttachmentCreateManyInput.schema";
import { LabReportAttachmentUncheckedCreateInputObjectSchema } from "@schemas/objects/LabReportAttachmentUncheckedCreateInput.schema";
import { LabReportAttachmentWhereInputObjectSchema } from "@schemas/objects/LabReportAttachmentWhereInput.schema";
import { LabReportAttachmentOrderByWithRelationInputObjectSchema } from "@schemas/objects/LabReportAttachmentOrderByWithRelationInput.schema";
import { LabReportAttachmentWhereUniqueInputObjectSchema } from "@schemas/objects/LabReportAttachmentWhereUniqueInput.schema";
import { LabReportAttachmentUncheckedUpdateInputObjectSchema } from "@schemas/objects/LabReportAttachmentUncheckedUpdateInput.schema";
// import { LabReportAttachmentOrderByWithAggregationInputObjectSchema } from "@schemas/objects/LabReportAttachmentOrderByWithAggregationInput.schema"; //
// import { LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/LabReportAttachmentScalarWhereWithAggregatesInput.schema"; //
import { LabReportAttachmentUpdateManyMutationInputObjectSchema } from "@schemas/objects/LabReportAttachmentUpdateManyMutationInput.schema"; //
// import { LabReportAttachmentCountAggregateInputObjectSchema } from "@schemas/objects/LabReportAttachmentCountAggregateInput.schema"; //
// import { LabReportAttachmentMinAggregateInputObjectSchema } from "@schemas/objects/LabReportAttachmentMinAggregateInput.schema"; //
// import { LabReportAttachmentMaxAggregateInputObjectSchema } from "@schemas/objects/LabReportAttachmentMaxAggregateInput.schema"; //

// export const LabReportAttachmentAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       LabReportAttachmentOrderByWithRelationInputObjectSchema,
//       LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: LabReportAttachmentWhereInputObjectSchema.optional(),
//   cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), LabReportAttachmentCountAggregateInputObjectSchema])
//     .optional(),
//   _min: LabReportAttachmentMinAggregateInputObjectSchema.optional(),
//   _max: LabReportAttachmentMaxAggregateInputObjectSchema.optional(),
// });

export const LabReportAttachmentCreateManySchema = z.object({
  data: z.union([
    LabReportAttachmentCreateManyInputObjectSchema,
    z.array(LabReportAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const LabReportAttachmentCreateOneSchema = z.object({
  data: LabReportAttachmentUncheckedCreateInputObjectSchema,
});

export const LabReportAttachmentDeleteManySchema = z.object({
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
});

export const LabReportAttachmentDeleteOneSchema = z.object({
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});

export const LabReportAttachmentFindFirstSchema = z.object({
  orderBy: z
    .union([
      LabReportAttachmentOrderByWithRelationInputObjectSchema,
      LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
  cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
});

export const LabReportAttachmentFindManySchema = z
  .object({
    orderBy: z
      .union([
        LabReportAttachmentOrderByWithRelationInputObjectSchema,
        LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: LabReportAttachmentWhereInputObjectSchema.optional(),
    cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
  })
  .optional();

export const LabReportAttachmentFindUniqueSchema = z.object({
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});

// export const LabReportAttachmentGroupBySchema = z.object({
//   where: LabReportAttachmentWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       LabReportAttachmentOrderByWithAggregationInputObjectSchema,
//       LabReportAttachmentOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(LabReportAttachmentScalarFieldEnumSchema),
// });

export const LabReportAttachmentUpdateManySchema = z.object({
  data: LabReportAttachmentUpdateManyMutationInputObjectSchema,
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
});

export const LabReportAttachmentUpdateOneSchema = z.object({
  data: LabReportAttachmentUncheckedUpdateInputObjectSchema,
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});

// export const LabReportAttachmentUpsertSchema = z.object({
//   where: LabReportAttachmentWhereUniqueInputObjectSchema,
//   create: LabReportAttachmentUncheckedCreateInputObjectSchema,
//   update: LabReportAttachmentUncheckedCreateInputObjectSchema,
// });

export const LabReportAttachmentCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     LabReportAttachmentOrderByWithRelationInputObjectSchema,
    //     LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: LabReportAttachmentWhereInputObjectSchema.optional(),
    // cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
