import { Router, json } from "express";
import { DeviceToken } from "@models/deviceToken.model";
import { unGuardedPrisma } from "@config/db";

export const deviceTokenRouter = Router();

deviceTokenRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
deviceTokenRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.aggregate(input));
});
deviceTokenRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.findFirst(input));
});
deviceTokenRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.findMany(input));
});
deviceTokenRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.deviceToken.findMany(input),
    unGuardedPrisma.deviceToken.count({ where: input?.where }),
    unGuardedPrisma.deviceToken.count(),
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
deviceTokenRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.findUnique(input));
});
deviceTokenRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.findUniqueOrThrow(input));
});
deviceTokenRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.groupBy(input));
});
deviceTokenRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.deviceToken.count(input));
});
deviceTokenRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.createMany(input));
});
deviceTokenRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.create(input));
});
deviceTokenRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.deleteMany(input));
});
deviceTokenRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.delete(input));
});
deviceTokenRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.updateMany(input));
});
deviceTokenRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.update(input));
});
deviceTokenRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.deviceToken.upsert(input));
});
