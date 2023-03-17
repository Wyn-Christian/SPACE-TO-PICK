import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

function Comment({
  content,
  createdAt = "03/03/23",
  seller = "Grabe K. Nabakla",
}) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography fontWeight="bold">{seller}</Typography>
        <Typography fontWeight="bold">{createdAt}</Typography>
        <Typography ml={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          natus? Nam dolorem earum sint? Nobis optio reprehenderit repellat
          saepe officiis a quidem, nesciunt, quasi possimus sapiente
          distinctio quaerat aut non eius iste libero neque eaque autem
          sequi voluptates exercitationem aliquid officia molestias
          commodi! Quas pariatur tempore quaerat dignissimos facilis
          voluptatibus, excepturi ea voluptatum quos maxime vero hic quo
          doloribus nam laudantium iure perferendis voluptates, delectus
          quam magni aspernatur similique, sequi ex. Tenetur exercitationem
          aspernatur non accusamus corporis natus cum sed eaque nemo sit,
          error repellat dolorem asperiores ducimus ea harum. Sed a in nisi
          quod vitae eaque fugit repudiandae adipisci.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Comment;
