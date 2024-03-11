import { Router, json } from "express";
import { InsurancePolicy } from "@models/insurancePolicy.model";

export const insurancePolicyRouter = Router();

insurancePolicyRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
insurancePolicyRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.aggregate(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.findFirst(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.findMany(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    InsurancePolicy.findMany(req, input),
    InsurancePolicy.count(req, { where: input?.where }),
    InsurancePolicy.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.findUnique(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await InsurancePolicy.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
insurancePolicyRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.groupBy(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InsurancePolicy.count(req, input, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/createMany", async (req, res) => {
  res.json(await InsurancePolicy.createMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/createOne", async (req, res) => {
  res.json(await InsurancePolicy.createOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/deleteMany", async (req, res) => {
  res.json(await InsurancePolicy.deleteMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/deleteOne", async (req, res) => {
  res.json(await InsurancePolicy.deleteOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/updateMany", async (req, res) => {
  res.json(await InsurancePolicy.updateMany(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/updateOne", async (req, res) => {
  res.json(await InsurancePolicy.updateOne(req, req.body, { bypassMiddleware: true }));
});
insurancePolicyRouter.post("/upsert", async (req, res) => {
  res.json(await InsurancePolicy.upsert(req, req.body, { bypassMiddleware: true }));
});
