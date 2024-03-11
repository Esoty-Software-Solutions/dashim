import { Router, json } from "express";
import { InstitutionMedicalService } from "@models/institutionMedicalService.model";

export const institutionMedicalServiceRouter = Router();

institutionMedicalServiceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
institutionMedicalServiceRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.aggregate(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.findFirst(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.findMany(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    InstitutionMedicalService.findMany(req, input),
    InstitutionMedicalService.count(req, { where: input?.where }),
    InstitutionMedicalService.count(req),
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
institutionMedicalServiceRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.findUnique(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await InstitutionMedicalService.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
institutionMedicalServiceRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.groupBy(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await InstitutionMedicalService.count(req, input, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/createMany", async (req, res) => {
  res.json(await InstitutionMedicalService.createMany(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/createOne", async (req, res) => {
  res.json(await InstitutionMedicalService.createOne(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/deleteMany", async (req, res) => {
  res.json(await InstitutionMedicalService.deleteMany(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/deleteOne", async (req, res) => {
  res.json(await InstitutionMedicalService.deleteOne(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/updateMany", async (req, res) => {
  res.json(await InstitutionMedicalService.updateMany(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/updateOne", async (req, res) => {
  res.json(await InstitutionMedicalService.updateOne(req, req.body, { bypassMiddleware: true }));
});
institutionMedicalServiceRouter.post("/upsert", async (req, res) => {
  res.json(await InstitutionMedicalService.upsert(req, req.body, { bypassMiddleware: true }));
});
