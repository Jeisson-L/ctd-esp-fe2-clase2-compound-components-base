import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { Card } from './card/Card';
import { CardPicture } from './card/CardPicture';
import { CardContent } from './card/CardContent';
import { CardActions } from './card/CardActions';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ rickIDDS }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery( { ids: rickIDDS } );

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];


  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <Card>
          <CardPicture image={character.image} />
          <CardContent name={character.name}>
            <CardActions chracterId={character.id}></CardActions>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CharactersComponent;
