import { Router, json } from "express";
import { MedicalCenter } from "@models/medicalCenter.model";
import { unGuardedPrisma } from "@config/db";

export const medicalCenterRouter = Router();

medicalCenterRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
medicalCenterRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.aggregate(input));
});
medicalCenterRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.findFirst(input));
});
medicalCenterRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.findMany(input));
});
medicalCenterRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.medicalCenter.findMany(input),
    unGuardedPrisma.medicalCenter.count({ where: input?.where }),
    unGuardedPrisma.medicalCenter.count(),
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
medicalCenterRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.findUnique(input));
});
medicalCenterRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.findUniqueOrThrow(input));
});
medicalCenterRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.groupBy(input));
});
medicalCenterRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalCenter.count(input));
});
medicalCenterRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.createMany(input));
});
medicalCenterRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.create(input));
});
medicalCenterRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.deleteMany(input));
});
medicalCenterRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.delete(input));
});
medicalCenterRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.updateMany(input));
});
medicalCenterRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.update(input));
});
medicalCenterRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalCenter.upsert(input));
});
