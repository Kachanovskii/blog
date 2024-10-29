import { Pagination, Stack } from "@mui/material";

interface BasicPaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({page, count, onChange}) => {
  return (
    <Stack spacing={2}>
      <Pagination page={page} count={count} onChange={onChange} color="primary" />
    </Stack>
  );
}

export default BasicPagination;
