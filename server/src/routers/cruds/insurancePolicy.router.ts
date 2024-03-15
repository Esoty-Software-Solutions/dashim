import { Router, json } from "express";
import { InsurancePolicy } from "@models/insurancePolicy.model";
import { unGuardedPrisma } from "@config/db";

export const insurancePolicyRouter = Router();

insurancePolicyRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
insurancePolicyRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.aggregate(input));
});
insurancePolicyRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.findFirst(input));
});
insurancePolicyRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.findMany(input));
});
insurancePolicyRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.insurancePolicy.findMany(input),
    unGuardedPrisma.insurancePolicy.count({ where: input?.where }),
    unGuardedPrisma.insurancePolicy.count(),
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
insurancePolicyRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.findUnique(input));
});
insurancePolicyRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.findUniqueOrThrow(input));
});
insurancePolicyRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.groupBy(input));
});
insurancePolicyRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.insurancePolicy.count(input));
});
insurancePolicyRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.createMany(input));
});
insurancePolicyRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.create(input));
});
insurancePolicyRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.deleteMany(input));
});
insurancePolicyRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.delete(input));
});
insurancePolicyRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.updateMany(input));
});
insurancePolicyRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.update(input));
});
insurancePolicyRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.insurancePolicy.upsert(input));
});
