import { Router, json } from "express";
import { ReviewStatus } from "@models/reviewStatus.model";

export const reviewStatusRouter = Router();

reviewStatusRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
reviewStatusRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.aggregate(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.findFirst(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.findMany(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    ReviewStatus.findMany(req, input),
    ReviewStatus.count(req, { where: input?.where }),
    ReviewStatus.count(req),
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
reviewStatusRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.findUnique(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await ReviewStatus.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
reviewStatusRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.groupBy(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatus.count(req, input, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/createMany", async (req, res) => {
  res.json(await ReviewStatus.createMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/createOne", async (req, res) => {
  res.json(await ReviewStatus.createOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/deleteMany", async (req, res) => {
  res.json(await ReviewStatus.deleteMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/deleteOne", async (req, res) => {
  res.json(await ReviewStatus.deleteOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/updateMany", async (req, res) => {
  res.json(await ReviewStatus.updateMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/updateOne", async (req, res) => {
  res.json(await ReviewStatus.updateOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusRouter.post("/upsert", async (req, res) => {
  res.json(await ReviewStatus.upsert(req, req.body, { bypassMiddleware: true }));
});
