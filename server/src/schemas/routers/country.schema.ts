import { z } from "zod";

import { CountryScalarFieldEnumSchema } from "@schemas/enums/CountryScalarFieldEnum.schema";
import { CountryCreateManyInputObjectSchema } from "@schemas/objects/CountryCreateManyInput.schema";
import { CountryUncheckedCreateInputObjectSchema } from "@schemas/objects/CountryUncheckedCreateInput.schema";
import { CountryWhereInputObjectSchema } from "@schemas/objects/CountryWhereInput.schema";
import { CountryOrderByWithRelationInputObjectSchema } from "@schemas/objects/CountryOrderByWithRelationInput.schema";
import { CountryWhereUniqueInputObjectSchema } from "@schemas/objects/CountryWhereUniqueInput.schema";
import { CountryUncheckedUpdateInputObjectSchema } from "@schemas/objects/CountryUncheckedUpdateInput.schema";
// import { CountryOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CountryOrderByWithAggregationInput.schema"; //
// import { CountryScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CountryScalarWhereWithAggregatesInput.schema"; //
// import { CountryUpdateManyMutationInputObjectSchema } from "@schemas/objects/CountryUpdateManyMutationInput.schema"; //
// import { CountryCountAggregateInputObjectSchema } from "@schemas/objects/CountryCountAggregateInput.schema"; //
// import { CountryMinAggregateInputObjectSchema } from "@schemas/objects/CountryMinAggregateInput.schema"; //
// import { CountryMaxAggregateInputObjectSchema } from "@schemas/objects/CountryMaxAggregateInput.schema"; //

// export const CountryAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CountryOrderByWithRelationInputObjectSchema,
//       CountryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CountryWhereInputObjectSchema.optional(),
//   cursor: CountryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CountryCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CountryMinAggregateInputObjectSchema.optional(),
//   _max: CountryMaxAggregateInputObjectSchema.optional(),
// });

export const CountryCreateManySchema = z.object({
  data: z.union([
    CountryCreateManyInputObjectSchema,
    z.array(CountryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CountryCreateOneSchema = z.object({
  data: CountryUncheckedCreateInputObjectSchema,
});

export const CountryDeleteManySchema = z.object({
  where: CountryWhereInputObjectSchema.optional(),
});

export const CountryDeleteOneSchema = z.object({
  where: CountryWhereUniqueInputObjectSchema.optional(),
});

// export const CountryFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       CountryOrderByWithRelationInputObjectSchema,
//       CountryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CountryWhereInputObjectSchema.optional(),
//   cursor: CountryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(CountryScalarFieldEnumSchema).optional(),
// });

export const CountryFindManySchema = z
  .object({
    orderBy: z
      .union([
        CountryOrderByWithRelationInputObjectSchema,
        CountryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: CountryWhereInputObjectSchema.optional(),
    cursor: CountryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CountryScalarFieldEnumSchema).optional(),
  })
  .optional();

export const CountryFindUniqueSchema = z.object({
  where: CountryWhereUniqueInputObjectSchema,
});

// export const CountryGroupBySchema = z.object({
//   where: CountryWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CountryOrderByWithAggregationInputObjectSchema,
//       CountryOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CountryScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CountryScalarFieldEnumSchema),
// });

// export const CountryUpdateManySchema = z.object({
//   data: CountryUpdateManyMutationInputObjectSchema,
//   where: CountryWhereInputObjectSchema.optional(),
// });

export const CountryUpdateOneSchema = z.object({
  data: CountryUncheckedUpdateInputObjectSchema,
  where: CountryWhereUniqueInputObjectSchema,
});

// export const CountryUpsertSchema = z.object({
//   where: CountryWhereUniqueInputObjectSchema,
//   create: CountryUncheckedCreateInputObjectSchema,
//   update: CountryUncheckedCreateInputObjectSchema,
// });

export const CountryCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     CountryOrderByWithRelationInputObjectSchema,
    //     CountryOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: CountryWhereInputObjectSchema.optional(),
    // cursor: CountryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
