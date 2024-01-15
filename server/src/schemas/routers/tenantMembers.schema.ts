import { z } from "zod";

import { TenantMembersScalarFieldEnumSchema } from "@schemas/enums/TenantMembersScalarFieldEnum.schema";
import { TenantMembersCreateManyInputObjectSchema } from "@schemas/objects/TenantMembersCreateManyInput.schema";
import { TenantMembersUncheckedCreateInputObjectSchema } from "@schemas/objects/TenantMembersUncheckedCreateInput.schema";
import { TenantMembersWhereInputObjectSchema } from "@schemas/objects/TenantMembersWhereInput.schema";
import { TenantMembersOrderByWithRelationInputObjectSchema } from "@schemas/objects/TenantMembersOrderByWithRelationInput.schema";
import { TenantMembersWhereUniqueInputObjectSchema } from "@schemas/objects/TenantMembersWhereUniqueInput.schema";
import { TenantMembersUncheckedUpdateInputObjectSchema } from "@schemas/objects/TenantMembersUncheckedUpdateInput.schema";
// import { TenantMembersOrderByWithAggregationInputObjectSchema } from "@schemas/objects/TenantMembersOrderByWithAggregationInput.schema"; //
// import { TenantMembersScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/TenantMembersScalarWhereWithAggregatesInput.schema"; //
// import { TenantMembersUpdateManyMutationInputObjectSchema } from "@schemas/objects/TenantMembersUpdateManyMutationInput.schema"; //
// import { TenantMembersCountAggregateInputObjectSchema } from "@schemas/objects/TenantMembersCountAggregateInput.schema"; //
// import { TenantMembersMinAggregateInputObjectSchema } from "@schemas/objects/TenantMembersMinAggregateInput.schema"; //
// import { TenantMembersMaxAggregateInputObjectSchema } from "@schemas/objects/TenantMembersMaxAggregateInput.schema"; //

// export const TenantMembersAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       TenantMembersOrderByWithRelationInputObjectSchema,
//       TenantMembersOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantMembersWhereInputObjectSchema.optional(),
//   cursor: TenantMembersWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), TenantMembersCountAggregateInputObjectSchema])
//     .optional(),
//   _min: TenantMembersMinAggregateInputObjectSchema.optional(),
//   _max: TenantMembersMaxAggregateInputObjectSchema.optional(),
// });

export const TenantMembersCreateManySchema = z.object({
  data: z.union([
    TenantMembersCreateManyInputObjectSchema,
    z.array(TenantMembersCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const TenantMembersCreateOneSchema = z.object({
  data: TenantMembersUncheckedCreateInputObjectSchema,
});

export const TenantMembersDeleteManySchema = z.object({
  where: TenantMembersWhereInputObjectSchema.optional(),
});

export const TenantMembersDeleteOneSchema = z.object({
  where: TenantMembersWhereUniqueInputObjectSchema.optional(),
});

// export const TenantMembersFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       TenantMembersOrderByWithRelationInputObjectSchema,
//       TenantMembersOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantMembersWhereInputObjectSchema.optional(),
//   cursor: TenantMembersWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(TenantMembersScalarFieldEnumSchema).optional(),
// });

export const TenantMembersFindManySchema = z.object({
  orderBy: z
    .union([
      TenantMembersOrderByWithRelationInputObjectSchema,
      TenantMembersOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantMembersWhereInputObjectSchema.optional(),
  cursor: TenantMembersWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantMembersScalarFieldEnumSchema).optional(),
});

export const TenantMembersFindUniqueSchema = z.object({
  where: TenantMembersWhereUniqueInputObjectSchema,
});

// export const TenantMembersGroupBySchema = z.object({
//   where: TenantMembersWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       TenantMembersOrderByWithAggregationInputObjectSchema,
//       TenantMembersOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: TenantMembersScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(TenantMembersScalarFieldEnumSchema),
// });

// export const TenantMembersUpdateManySchema = z.object({
//   data: TenantMembersUpdateManyMutationInputObjectSchema,
//   where: TenantMembersWhereInputObjectSchema.optional(),
// });

export const TenantMembersUpdateOneSchema = z.object({
  data: TenantMembersUncheckedUpdateInputObjectSchema,
  where: TenantMembersWhereUniqueInputObjectSchema,
});

// export const TenantMembersUpsertSchema = z.object({
//   where: TenantMembersWhereUniqueInputObjectSchema,
//   create: TenantMembersUncheckedCreateInputObjectSchema,
//   update: TenantMembersUncheckedCreateInputObjectSchema,
// });

export const TenantMembersCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     TenantMembersOrderByWithRelationInputObjectSchema,
  //     TenantMembersOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: TenantMembersWhereInputObjectSchema.optional(),
  // cursor: TenantMembersWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
