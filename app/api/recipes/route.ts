import { NextResponse } from 'next/server';
import { prisma } from '@/prisma';  // Make sure this is your correct prisma import path

// GET all recipes
export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany();
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
  }
}

// POST a new recipe
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image, ingredients, instructions, authorId } = body;

    if (!title || !instructions || !authorId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        image,
        ingredients,
        instructions,
        authorId,
      },
    });

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
  }
}

// DELETE a recipe
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing recipe ID' }, { status: 400 });
    }

    await prisma.recipe.delete({
      where: { id: parseInt(id, 10) },
    });

    return NextResponse.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete recipe' }, { status: 500 });
  }
}

// PUT (Update) a recipe
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, image, ingredients, instructions, authorId } = body;

    if (!id || !title || !instructions || !authorId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: parseInt(id, 10) },
      data: {
        title,
        image,
        ingredients,
        instructions,
        authorId,
      },
    });

    return NextResponse.json(updatedRecipe);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update recipe' }, { status: 500 });
  }
}
