import { z } from "zod";

import { SubscriberFutureStatusChangeScalarFieldEnumSchema } from "@schemas/enums/SubscriberFutureStatusChangeScalarFieldEnum.schema";
import { SubscriberFutureStatusChangeCreateManyInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeCreateManyInput.schema";
import { SubscriberFutureStatusChangeUncheckedCreateInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeUncheckedCreateInput.schema";
import { SubscriberFutureStatusChangeWhereInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeWhereInput.schema";
import { SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeOrderByWithRelationInput.schema";
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeWhereUniqueInput.schema";
import { SubscriberFutureStatusChangeUncheckedUpdateInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeUncheckedUpdateInput.schema";
// import { SubscriberFutureStatusChangeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeOrderByWithAggregationInput.schema"; //
// import { SubscriberFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeScalarWhereWithAggregatesInput.schema"; //
import { SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeUpdateManyMutationInput.schema"; //
// import { SubscriberFutureStatusChangeCountAggregateInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeCountAggregateInput.schema"; //
// import { SubscriberFutureStatusChangeMinAggregateInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeMinAggregateInput.schema"; //
// import { SubscriberFutureStatusChangeMaxAggregateInputObjectSchema } from "@schemas/objects/SubscriberFutureStatusChangeMaxAggregateInput.schema"; //

// export const SubscriberFutureStatusChangeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema,
//       SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
//   cursor: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), SubscriberFutureStatusChangeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: SubscriberFutureStatusChangeMinAggregateInputObjectSchema.optional(),
//   _max: SubscriberFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
// });

export const SubscriberFutureStatusChangeCreateManySchema = z.object({
  data: z.union([
    SubscriberFutureStatusChangeCreateManyInputObjectSchema,
    z.array(SubscriberFutureStatusChangeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const SubscriberFutureStatusChangeCreateOneSchema = z.object({
  data: SubscriberFutureStatusChangeUncheckedCreateInputObjectSchema,
});

export const SubscriberFutureStatusChangeDeleteManySchema = z.object({
  where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const SubscriberFutureStatusChangeDeleteOneSchema = z.object({
  where: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const SubscriberFutureStatusChangeFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema,
//       SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
//   cursor: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(SubscriberFutureStatusChangeScalarFieldEnumSchema).optional(),
// });

export const SubscriberFutureStatusChangeFindManySchema = z
  .object({
    orderBy: z
      .union([
        SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema,
        SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
    cursor: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(SubscriberFutureStatusChangeScalarFieldEnumSchema).optional(),
  })
  .optional();

export const SubscriberFutureStatusChangeFindUniqueSchema = z.object({
  where: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const SubscriberFutureStatusChangeGroupBySchema = z.object({
//   where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       SubscriberFutureStatusChangeOrderByWithAggregationInputObjectSchema,
//       SubscriberFutureStatusChangeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: SubscriberFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(SubscriberFutureStatusChangeScalarFieldEnumSchema),
// });

export const SubscriberFutureStatusChangeUpdateManySchema = z.object({
  data: SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema,
  where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const SubscriberFutureStatusChangeUpdateOneSchema = z.object({
  data: SubscriberFutureStatusChangeUncheckedUpdateInputObjectSchema,
  where: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const SubscriberFutureStatusChangeUpsertSchema = z.object({
//   where: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
//   create: SubscriberFutureStatusChangeUncheckedCreateInputObjectSchema,
//   update: SubscriberFutureStatusChangeUncheckedCreateInputObjectSchema,
// });

export const SubscriberFutureStatusChangeCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema,
    //     SubscriberFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: SubscriberFutureStatusChangeWhereInputObjectSchema.optional(),
    // cursor: SubscriberFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
