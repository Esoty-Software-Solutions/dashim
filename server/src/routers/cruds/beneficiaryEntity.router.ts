import { Router, json } from "express";
import { BeneficiaryEntity } from "@models/beneficiaryEntity.model";

export const beneficiaryEntityRouter = Router();

beneficiaryEntityRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryEntityRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BeneficiaryEntity.findMany(req, input),
    BeneficiaryEntity.count(req, { where: input?.where }),
    BeneficiaryEntity.count(req),
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
beneficiaryEntityRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BeneficiaryEntity.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryEntityRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntity.count(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/createMany", async (req, res) => {
  res.json(await BeneficiaryEntity.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/createOne", async (req, res) => {
  res.json(await BeneficiaryEntity.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/deleteMany", async (req, res) => {
  res.json(await BeneficiaryEntity.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/deleteOne", async (req, res) => {
  res.json(await BeneficiaryEntity.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/updateMany", async (req, res) => {
  res.json(await BeneficiaryEntity.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/updateOne", async (req, res) => {
  res.json(await BeneficiaryEntity.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityRouter.post("/upsert", async (req, res) => {
  res.json(await BeneficiaryEntity.upsert(req, req.body, { bypassMiddleware: true }));
});
