import { Router, json } from "express";
import { InsurancePolicyMedicalCenter } from "@models/insurancePolicyMedicalCenter.model";
import { unGuardedPrisma } from "@config/db";

export const insurancePolicyMedicalCenterRouter = Router();

insurancePolicyMedicalCenterRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
insurancePolicyMedicalCenterRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.aggregate(input));
});
insurancePolicyMedicalCenterRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.findFirst(input));
});
insurancePolicyMedicalCenterRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.findMany(input));
});
insurancePolicyMedicalCenterRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.insurancePolicyMedicalCenter.findMany(input),
    unGuardedPrisma.insurancePolicyMedicalCenter.count({ where: input?.where }),
    unGuardedPrisma.insurancePolicyMedicalCenter.count(),
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
insurancePolicyMedicalCenterRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.findUnique(input));
});
insurancePolicyMedicalCenterRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.findUniqueOrThrow(input));
});
insurancePolicyMedicalCenterRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.groupBy(input));
});
insurancePolicyMedicalCenterRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.count(input));
});
insurancePolicyMedicalCenterRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.createMany(input));
});
insurancePolicyMedicalCenterRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.create(input));
});
insurancePolicyMedicalCenterRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.deleteMany(input));
});
insurancePolicyMedicalCenterRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.delete(input));
});
insurancePolicyMedicalCenterRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.updateMany(input));
});
insurancePolicyMedicalCenterRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.update(input));
});
insurancePolicyMedicalCenterRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicyMedicalCenter.upsert(input));
});
