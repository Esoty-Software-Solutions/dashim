import { z } from "zod";

import { CityScalarFieldEnumSchema } from "@schemas/enums/CityScalarFieldEnum.schema";
import { CityCreateManyInputObjectSchema } from "@schemas/objects/CityCreateManyInput.schema";
import { CityUncheckedCreateInputObjectSchema } from "@schemas/objects/CityUncheckedCreateInput.schema";
import { CityWhereInputObjectSchema } from "@schemas/objects/CityWhereInput.schema";
import { CityOrderByWithRelationInputObjectSchema } from "@schemas/objects/CityOrderByWithRelationInput.schema";
import { CityWhereUniqueInputObjectSchema } from "@schemas/objects/CityWhereUniqueInput.schema";
import { CityUncheckedUpdateInputObjectSchema } from "@schemas/objects/CityUncheckedUpdateInput.schema";
// import { CityOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CityOrderByWithAggregationInput.schema"; //
// import { CityScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CityScalarWhereWithAggregatesInput.schema"; //
// import { CityUpdateManyMutationInputObjectSchema } from "@schemas/objects/CityUpdateManyMutationInput.schema"; //
// import { CityCountAggregateInputObjectSchema } from "@schemas/objects/CityCountAggregateInput.schema"; //
// import { CityMinAggregateInputObjectSchema } from "@schemas/objects/CityMinAggregateInput.schema"; //
// import { CityMaxAggregateInputObjectSchema } from "@schemas/objects/CityMaxAggregateInput.schema"; //

// export const CityAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CityOrderByWithRelationInputObjectSchema,
//       CityOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CityWhereInputObjectSchema.optional(),
//   cursor: CityWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CityCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CityMinAggregateInputObjectSchema.optional(),
//   _max: CityMaxAggregateInputObjectSchema.optional(),
// });

export const CityCreateManySchema = z.object({
  data: z.union([
    CityCreateManyInputObjectSchema,
    z.array(CityCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CityCreateOneSchema = z.object({
  data: CityUncheckedCreateInputObjectSchema,
});

export const CityDeleteManySchema = z.object({
  where: CityWhereInputObjectSchema.optional(),
});

export const CityDeleteOneSchema = z.object({
  where: CityWhereUniqueInputObjectSchema.optional(),
});

// export const CityFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       CityOrderByWithRelationInputObjectSchema,
//       CityOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CityWhereInputObjectSchema.optional(),
//   cursor: CityWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(CityScalarFieldEnumSchema).optional(),
// });

export const CityFindManySchema = z.object({
  orderBy: z
    .union([
      CityOrderByWithRelationInputObjectSchema,
      CityOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CityWhereInputObjectSchema.optional(),
  cursor: CityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CityScalarFieldEnumSchema).optional(),
});

export const CityFindUniqueSchema = z.object({
  where: CityWhereUniqueInputObjectSchema,
});

// export const CityGroupBySchema = z.object({
//   where: CityWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CityOrderByWithAggregationInputObjectSchema,
//       CityOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CityScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CityScalarFieldEnumSchema),
// });

// export const CityUpdateManySchema = z.object({
//   data: CityUpdateManyMutationInputObjectSchema,
//   where: CityWhereInputObjectSchema.optional(),
// });

export const CityUpdateOneSchema = z.object({
  data: CityUncheckedUpdateInputObjectSchema,
  where: CityWhereUniqueInputObjectSchema,
});

// export const CityUpsertSchema = z.object({
//   where: CityWhereUniqueInputObjectSchema,
//   create: CityUncheckedCreateInputObjectSchema,
//   update: CityUncheckedCreateInputObjectSchema,
// });

export const CityCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     CityOrderByWithRelationInputObjectSchema,
  //     CityOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: CityWhereInputObjectSchema.optional(),
  // cursor: CityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
