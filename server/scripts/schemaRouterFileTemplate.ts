import { z } from "zod";

import { UserScalarFieldEnumSchema } from "@schemas/enums/UserScalarFieldEnum.schema";
import { UserCreateManyInputObjectSchema } from "@schemas/objects/UserCreateManyInput.schema";
import { UserUncheckedCreateInputObjectSchema } from "@schemas/objects/UserUncheckedCreateInput.schema";
import { UserWhereInputObjectSchema } from "@schemas/objects/UserWhereInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "@schemas/objects/UserOrderByWithRelationInput.schema";
import { UserWhereUniqueInputObjectSchema } from "@schemas/objects/UserWhereUniqueInput.schema";
import { UserUncheckedUpdateInputObjectSchema } from "@schemas/objects/UserUncheckedUpdateInput.schema";
import { UserOrderByWithAggregationInputObjectSchema } from "@schemas/objects/UserOrderByWithAggregationInput.schema"; //
import { UserScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/UserScalarWhereWithAggregatesInput.schema"; //
import { UserUpdateManyMutationInputObjectSchema } from "@schemas/objects/UserUpdateManyMutationInput.schema"; //
import { UserCountAggregateInputObjectSchema } from "@schemas/objects/UserCountAggregateInput.schema"; //
import { UserMinAggregateInputObjectSchema } from "@schemas/objects/UserMinAggregateInput.schema"; //
import { UserMaxAggregateInputObjectSchema } from "@schemas/objects/UserMaxAggregateInput.schema"; //

export const UserAggregateSchema = z.object({
  orderBy: z
    .union([
      UserOrderByWithRelationInputObjectSchema,
      UserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UserCountAggregateInputObjectSchema])
    .optional(),
  _min: UserMinAggregateInputObjectSchema.optional(),
  _max: UserMaxAggregateInputObjectSchema.optional(),
}); //

export const UserCreateManySchema = z.object({
  data: z.union([
    UserCreateManyInputObjectSchema,
    z.array(UserCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const UserCreateOneSchema = z.object({
  data: UserUncheckedCreateInputObjectSchema,
});

export const UserDeleteManySchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
});

export const UserFindFirstSchema = z.object({
  orderBy: z
    .union([
      UserOrderByWithRelationInputObjectSchema,
      UserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserScalarFieldEnumSchema).optional(),
});

export const UserFindManySchema = z.object({
  orderBy: z
    .union([
      UserOrderByWithRelationInputObjectSchema,
      UserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserScalarFieldEnumSchema).optional(),
});

export const UserFindUniqueSchema = z.object({
  where: UserWhereUniqueInputObjectSchema,
});

export const UserGroupBySchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserOrderByWithAggregationInputObjectSchema,
      UserOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserScalarFieldEnumSchema),
}); //

export const UserUpdateManySchema = z.object({
  data: UserUpdateManyMutationInputObjectSchema,
  where: UserWhereInputObjectSchema.optional(),
}); //

export const UserUpdateOneSchema = z.object({
  data: UserUncheckedUpdateInputObjectSchema,
  where: UserWhereUniqueInputObjectSchema,
});

export const UserUpsertSchema = z.object({
  where: UserWhereUniqueInputObjectSchema,
  create: UserUncheckedCreateInputObjectSchema,
  update: UserUncheckedCreateInputObjectSchema,
}); //

export const UserCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     UserOrderByWithRelationInputObjectSchema,
  //     UserOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: UserWhereInputObjectSchema.optional(),
  // cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
