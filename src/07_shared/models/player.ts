import { IGameWeekStats } from "./game_week_stats";

export interface IPlayer {
  id: number;
  team: number;

  date_created: string;
  date_updated: string;

  age: number;
  market_value: number;
  price: number | null;

  name: string;
  club: string;
  position: string;
  nationality: string;
  height: string;

  image_url: string;
  nationality_image_url: string;

  is_injured: boolean;
  is_right_foot: boolean;

  gameweek_stats: IGameWeekStats[];
}

// date_created = models.DateField(auto_now_add=True)
//     date_updated = models.DateField(auto_now=True)

//     name = models.CharField(max_length=255, unique=True)
//     club = models.CharField(max_length=255)
//     position = models.CharField(max_length=255)
//     nationality = models.CharField(max_length=255)
//     height = models.CharField(max_length=255)

//     age = models.IntegerField()
//     market_value = models.IntegerField()

//     image_url = models.URLField()
//     nationality_image_url = models.URLField()

//     price = models.DecimalField(max_digits=3, decimal_places=1, null=True)

//     is_injured = models.BooleanField(default=False)
//     is_right_foot = models.BooleanField(default=True)

//     team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players')
