import { z } from "zod";

import { GenderScalarFieldEnumSchema } from "@schemas/enums/GenderScalarFieldEnum.schema";
import { GenderCreateManyInputObjectSchema } from "@schemas/objects/GenderCreateManyInput.schema";
import { GenderUncheckedCreateInputObjectSchema } from "@schemas/objects/GenderUncheckedCreateInput.schema";
import { GenderWhereInputObjectSchema } from "@schemas/objects/GenderWhereInput.schema";
import { GenderOrderByWithRelationInputObjectSchema } from "@schemas/objects/GenderOrderByWithRelationInput.schema";
import { GenderWhereUniqueInputObjectSchema } from "@schemas/objects/GenderWhereUniqueInput.schema";
import { GenderUncheckedUpdateInputObjectSchema } from "@schemas/objects/GenderUncheckedUpdateInput.schema";
// import { GenderOrderByWithAggregationInputObjectSchema } from "@schemas/objects/GenderOrderByWithAggregationInput.schema"; //
// import { GenderScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/GenderScalarWhereWithAggregatesInput.schema"; //
import { GenderUpdateManyMutationInputObjectSchema } from "@schemas/objects/GenderUpdateManyMutationInput.schema"; //
// import { GenderCountAggregateInputObjectSchema } from "@schemas/objects/GenderCountAggregateInput.schema"; //
// import { GenderMinAggregateInputObjectSchema } from "@schemas/objects/GenderMinAggregateInput.schema"; //
// import { GenderMaxAggregateInputObjectSchema } from "@schemas/objects/GenderMaxAggregateInput.schema"; //

// export const GenderAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       GenderOrderByWithRelationInputObjectSchema,
//       GenderOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: GenderWhereInputObjectSchema.optional(),
//   cursor: GenderWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), GenderCountAggregateInputObjectSchema])
//     .optional(),
//   _min: GenderMinAggregateInputObjectSchema.optional(),
//   _max: GenderMaxAggregateInputObjectSchema.optional(),
// });

export const GenderCreateManySchema = z.object({
  data: z.union([
    GenderCreateManyInputObjectSchema,
    z.array(GenderCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const GenderCreateOneSchema = z.object({
  data: GenderUncheckedCreateInputObjectSchema,
});

export const GenderDeleteManySchema = z.object({
  where: GenderWhereInputObjectSchema.optional(),
});

export const GenderDeleteOneSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
});

// export const GenderFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       GenderOrderByWithRelationInputObjectSchema,
//       GenderOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: GenderWhereInputObjectSchema.optional(),
//   cursor: GenderWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(GenderScalarFieldEnumSchema).optional(),
// });

export const GenderFindManySchema = z
  .object({
    orderBy: z
      .union([
        GenderOrderByWithRelationInputObjectSchema,
        GenderOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GenderWhereInputObjectSchema.optional(),
    cursor: GenderWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(GenderScalarFieldEnumSchema).optional(),
  })
  .optional();

export const GenderFindUniqueSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
});

// export const GenderGroupBySchema = z.object({
//   where: GenderWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       GenderOrderByWithAggregationInputObjectSchema,
//       GenderOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: GenderScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(GenderScalarFieldEnumSchema),
// });

export const GenderUpdateManySchema = z.object({
  data: GenderUpdateManyMutationInputObjectSchema,
  where: GenderWhereInputObjectSchema.optional(),
});

export const GenderUpdateOneSchema = z.object({
  data: GenderUncheckedUpdateInputObjectSchema,
  where: GenderWhereUniqueInputObjectSchema,
});

// export const GenderUpsertSchema = z.object({
//   where: GenderWhereUniqueInputObjectSchema,
//   create: GenderUncheckedCreateInputObjectSchema,
//   update: GenderUncheckedCreateInputObjectSchema,
// });

export const GenderCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     GenderOrderByWithRelationInputObjectSchema,
    //     GenderOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: GenderWhereInputObjectSchema.optional(),
    // cursor: GenderWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
