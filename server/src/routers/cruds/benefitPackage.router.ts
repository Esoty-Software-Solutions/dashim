import { Router, json } from "express";
import { BenefitPackage } from "@models/benefitPackage.model";

export const benefitPackageRouter = Router();

benefitPackageRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
benefitPackageRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.aggregate(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.findFirst(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.findMany(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BenefitPackage.findMany(req, input),
    BenefitPackage.count(req, { where: input?.where }),
    BenefitPackage.count(req),
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
benefitPackageRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.findUnique(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BenefitPackage.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
benefitPackageRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.groupBy(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BenefitPackage.count(req, input, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/createMany", async (req, res) => {
  res.json(await BenefitPackage.createMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/createOne", async (req, res) => {
  res.json(await BenefitPackage.createOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/deleteMany", async (req, res) => {
  res.json(await BenefitPackage.deleteMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/deleteOne", async (req, res) => {
  res.json(await BenefitPackage.deleteOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/updateMany", async (req, res) => {
  res.json(await BenefitPackage.updateMany(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/updateOne", async (req, res) => {
  res.json(await BenefitPackage.updateOne(req, req.body, { bypassMiddleware: true }));
});
benefitPackageRouter.post("/upsert", async (req, res) => {
  res.json(await BenefitPackage.upsert(req, req.body, { bypassMiddleware: true }));
});
