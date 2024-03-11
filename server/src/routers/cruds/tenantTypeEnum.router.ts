import { Router, json } from "express";
import { TenantTypeEnum } from "@models/tenantTypeEnum.model";
import { unGuardedPrisma } from "@config/db";

export const tenantTypeEnumRouter = Router();

tenantTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
tenantTypeEnumRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.aggregate(input));
});
tenantTypeEnumRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.findFirst(input));
});
tenantTypeEnumRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.findMany(input));
});
tenantTypeEnumRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.tenantTypeEnum.findMany(input),
    unGuardedPrisma.tenantTypeEnum.count({ where: input?.where }),
    unGuardedPrisma.tenantTypeEnum.count(),
  ]);
  const statistics: {
    key: string;
    value: string | number | boolean;
  }[] = [];
  res.json({
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  });
});
tenantTypeEnumRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.findUnique(input));
});
tenantTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.findUniqueOrThrow(input));
});
tenantTypeEnumRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.groupBy(input));
});
tenantTypeEnumRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenantTypeEnum.count(input));
});
tenantTypeEnumRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.createMany(input));
});
tenantTypeEnumRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.create(input));
});
tenantTypeEnumRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.deleteMany(input));
});
tenantTypeEnumRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.delete(input));
});
tenantTypeEnumRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.updateMany(input));
});
tenantTypeEnumRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.update(input));
});
tenantTypeEnumRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenantTypeEnum.upsert(input));
});
