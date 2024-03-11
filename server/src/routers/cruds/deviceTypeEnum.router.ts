import { Router, json } from "express";
import { DeviceTypeEnum } from "@models/deviceTypeEnum.model";
import { unGuardedPrisma } from "@config/db";

export const deviceTypeEnumRouter = Router();

deviceTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
deviceTypeEnumRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.aggregate(input));
});
deviceTypeEnumRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.findFirst(input));
});
deviceTypeEnumRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.findMany(input));
});
deviceTypeEnumRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.deviceTypeEnum.findMany(input),
    unGuardedPrisma.deviceTypeEnum.count({ where: input?.where }),
    unGuardedPrisma.deviceTypeEnum.count(),
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
deviceTypeEnumRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.findUnique(input));
});
deviceTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.findUniqueOrThrow(input));
});
deviceTypeEnumRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.groupBy(input));
});
deviceTypeEnumRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceTypeEnum.count(input));
});
deviceTypeEnumRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.createMany(input));
});
deviceTypeEnumRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.create(input));
});
deviceTypeEnumRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.deleteMany(input));
});
deviceTypeEnumRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.delete(input));
});
deviceTypeEnumRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.updateMany(input));
});
deviceTypeEnumRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.update(input));
});
deviceTypeEnumRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceTypeEnum.upsert(input));
});
