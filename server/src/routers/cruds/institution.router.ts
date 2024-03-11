import { Router, json } from "express";
import { Institution } from "@models/institution.model";

export const institutionRouter = Router();

institutionRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
institutionRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.aggregate(req, input, { bypassMiddleware: true }));
});
institutionRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.findFirst(req, input, { bypassMiddleware: true }));
});
institutionRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.findMany(req, input, { bypassMiddleware: true }));
});
institutionRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    Institution.findMany(req, input),
    Institution.count(req, { where: input?.where }),
    Institution.count(req),
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
institutionRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.findUnique(req, input, { bypassMiddleware: true }));
});
institutionRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await Institution.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
institutionRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.groupBy(req, input, { bypassMiddleware: true }));
});
institutionRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await Institution.count(req, input, { bypassMiddleware: true }));
});
institutionRouter.post("/createMany", async (req, res) => {
  res.json(await Institution.createMany(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/createOne", async (req, res) => {
  res.json(await Institution.createOne(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/deleteMany", async (req, res) => {
  res.json(await Institution.deleteMany(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/deleteOne", async (req, res) => {
  res.json(await Institution.deleteOne(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/updateMany", async (req, res) => {
  res.json(await Institution.updateMany(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/updateOne", async (req, res) => {
  res.json(await Institution.updateOne(req, req.body, { bypassMiddleware: true }));
});
institutionRouter.post("/upsert", async (req, res) => {
  res.json(await Institution.upsert(req, req.body, { bypassMiddleware: true }));
});
