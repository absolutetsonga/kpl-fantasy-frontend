import { z, ZodSchema } from "zod";
import { IGameWeekStats, IPlayer, IUser } from "@/src/07_shared/models";

export const gameWeekStatsSchema: ZodSchema<IGameWeekStats> = z.object({
  id: z.number(),
  gameweek: z.number(),
  date_created: z.string(),
  date_updated: z.string(),
  goals_scored: z.number(),
  assists: z.number(),
  own_goals_scored: z.number(),
  clean_sheets: z.number(),
  yellow_cards: z.number(),
  red_cards: z.number(),
});

export const playerSchema: ZodSchema<IPlayer> = z.object({
  id: z.number(),
  team: z.number(),
  sofascore_id: z.number(),
  date_created: z.string(),
  date_updated: z.string(),
  age: z.number(),
  market_value: z.number(),
  price: z.number().nullable(),
  name: z.string(),
  club: z.string(),
  position: z.string(),
  nationality: z.string(),
  height: z.string(),
  image_url: z.string().url(),
  nationality_image_url: z.string().url(),
  is_injured: z.boolean(),
  is_right_foot: z.boolean(),
  gameweek_stats: z.array(gameWeekStatsSchema),
});

export const registerUserSchema: ZodSchema<IUser> = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  re_password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const resetPassowrdUserSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  re_password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const resetPasswordRequestUserSchema = z.object({
  email: z.string().email("Invalid email address"),
});