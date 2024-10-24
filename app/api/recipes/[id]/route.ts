import { NextResponse } from 'next/server';
import { prisma } from '@/prisma'; 

// GET a single recipe by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Missing recipe ID' }, { status: 400 });
  }

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!recipe) {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch recipe' }, { status: 500 });
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
