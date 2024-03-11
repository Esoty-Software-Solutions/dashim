import { Router, json } from "express";
import { BeneficiaryService } from "@models/beneficiaryService.model";

export const beneficiaryServiceRouter = Router();

beneficiaryServiceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryServiceRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BeneficiaryService.findMany(req, input),
    BeneficiaryService.count(req, { where: input?.where }),
    BeneficiaryService.count(req),
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
beneficiaryServiceRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BeneficiaryService.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryServiceRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryService.count(req, input, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/createMany", async (req, res) => {
  res.json(await BeneficiaryService.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/createOne", async (req, res) => {
  res.json(await BeneficiaryService.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/deleteMany", async (req, res) => {
  res.json(await BeneficiaryService.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/deleteOne", async (req, res) => {
  res.json(await BeneficiaryService.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/updateMany", async (req, res) => {
  res.json(await BeneficiaryService.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/updateOne", async (req, res) => {
  res.json(await BeneficiaryService.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryServiceRouter.post("/upsert", async (req, res) => {
  res.json(await BeneficiaryService.upsert(req, req.body, { bypassMiddleware: true }));
});
