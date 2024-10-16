/*
  Warnings:

  - You are about to drop the column `extendedIngredients` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" RENAME COLUMN "extendedIngredients" TO "ingredients";
ALTER TABLE "Recipe"
ALTER COLUMN "ingredients" TYPE text[] USING string_to_array("ingredients", ' ');
