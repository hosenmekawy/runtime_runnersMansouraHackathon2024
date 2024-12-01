import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Product() {
  const products = [
    { id: 1, name: 'T-Shirt', category: 'Tops', material: 'Cotton', stock: 500 },
    { id: 2, name: 'Jeans', category: 'Bottoms', material: 'Denim', stock: 300 },
    { id: 3, name: 'Dress', category: 'Full Body', material: 'Silk', stock: 200 },
    { id: 4, name: 'Jacket', category: 'Outerwear', material: 'Leather', stock: 150 },
    { id: 5, name: 'Skirt', category: 'Bottoms', material: 'Cotton Blend', stock: 250 },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="flex justify-between items-center mb-6">
        <Input className="max-w-sm" placeholder="Search products..." />
        <Button>Add New Product</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.material}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
}

